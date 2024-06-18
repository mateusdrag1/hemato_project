import AppContainer from '@/components/Layout/AppContainer';
import axios from 'axios';

import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';

const Scanner: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const fileRef = useRef<any>();

  const [hasImage, setHasImage] = useState(false);

  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scanPercent, setScanPercent] = useState<string | null>(null);

  const [file, setFile] = useState<File>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      setHasImage(false);
      return;
    }

    setFile(event.target.files[0]);

    setScanPercent(null);
    setScanResult(null);

    setHasImage(true);
  };

  const sendImage = async (base64data: any) => {
    try {
      const response = await axios({
        method: 'POST',
        url: import.meta.env.VITE_API_PYTHON_URL,
        params: {
          api_key: import.meta.env.VITE_API_PYTHON_KEY,
        },
        data: base64data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { predictions } = response.data;

      const predicationsConfidence = Object.values(predictions).map(
        (prediction: any) => prediction.confidence,
      );

      const predicationsNames = Object.keys(predictions);

      const maxConfidence = Math.max(...predicationsConfidence);

      const cellName = predicationsNames[predicationsConfidence.indexOf(maxConfidence)];

      enum CELLNAMES {
        monocyte = 'Monócito',
        basophil = 'Basófilo',
        neutrophil = 'Neutrófilo',
        lymphocyte = 'Linfócito',
        eosinophil = 'Eosinófilo',
      }

      setScanPercent(`${(maxConfidence * 100).toFixed(2)}%`);
      setScanResult(CELLNAMES[cellName as keyof typeof CELLNAMES]);
    } catch (error) {
      enqueueSnackbar('Erro ao enviar imagem', { variant: 'error' });
    }
  };

  const handleGetImage = async () => {
    try {
      const reader = new FileReader();

      if (!file) return;

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;

        sendImage(base64data);
      };
    } catch (error) {
      enqueueSnackbar('Erro ao enviar imagem', { variant: 'error' });
    }
  };

  return (
    <AppContainer title='Scanner'>
      <div className='flex justify-center'>
        {hasImage && file ? (
          <img
            src={URL.createObjectURL(file)}
            alt='placeholder'
            className='rounded-lg object-cover'
          />
        ) : (
          <div className='bg-gray-300 flex items-center justify-center h-96 w-96 rounded-lg'></div>
        )}
      </div>

      {scanResult && (
        <div className='flex flex-col items-center mt-8'>
          <span className='text-2xl font-bold'>{scanResult}</span>
          <span className='text-lg'>{scanPercent}</span>
        </div>
      )}

      <div className='flex flex-col justify-center ml-8 mt-10'>
        <button
          onClick={() => fileRef.current.click()}
          className='bg-primary text-white px-4 py-2 rounded-md bg-red-400'
        >
          <input
            id='upload'
            name='upload'
            type='file'
            ref={fileRef}
            hidden
            onChange={handleChange}
          />
          {hasImage ? 'Alterar imagem' : 'Adicionar imagem'}
        </button>
        {hasImage && (
          <button
            onClick={handleGetImage}
            className='bg-primary text-white px-4 py-2 rounded-md bg-red-400 mt-4'
          >
            Scan células
          </button>
        )}
      </div>
    </AppContainer>
  );
};

export { Scanner };
