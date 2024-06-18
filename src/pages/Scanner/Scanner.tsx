import AppContainer from '@/components/Layout/AppContainer';
import axios from 'axios';

import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';

const Scanner: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const fileRef = useRef<any>();

  const [hasImage, setHasImage] = useState(false);

  const [loading, setLoading] = useState(false);

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
    setScanPercent(null);
    setScanResult(null);

    setLoading(true);
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
    } finally {
      setLoading(false);
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

      {loading && (
        <div role='status' className='flex justify-center'>
          <svg
            aria-hidden='true'
            className='w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-red-600 mt-10'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className='sr-only'>Loading...</span>
        </div>
      )}

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
