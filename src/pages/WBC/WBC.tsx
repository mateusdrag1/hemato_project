import AppContainer from '@/components/Layout/AppContainer';
import { ResultWBC } from '@/components/ResultWBC';
import { SmearForm } from '@/components/SmearForm';
import { CreateSmearFormData } from '@/components/SmearForm/validate';

export interface BloodSmear extends CreateSmearFormData {
  created_at: string;
}

import { FC, useState } from 'react';

const WBC: FC = () => {
  const [bloodSmear, setBloodSmear] = useState<BloodSmear[]>(
    localStorage.getItem('bloodSmear')
      ? JSON.parse(localStorage.getItem('bloodSmear') as string)
      : [],
  );

  const removeSmear = (smear_id: string) => {
    const newBloodSmear = bloodSmear.filter((smear) => smear.smear_id !== smear_id);

    setBloodSmear(newBloodSmear);

    localStorage.setItem('bloodSmear', JSON.stringify(newBloodSmear));
  };

  return (
    <AppContainer title='Série Leucocitária'>
      <SmearForm setBloodSmear={setBloodSmear} bloodSmear={bloodSmear} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {bloodSmear.length > 0 &&
          bloodSmear.map((bloodSmear) => (
            <ResultWBC
              removeSmear={removeSmear}
              key={`${bloodSmear.created_at}${bloodSmear.smear_id}`}
              bastonetes={bloodSmear.rod}
              data={bloodSmear.created_at}
              eosinofilos={bloodSmear.eosinophils}
              laminaID={bloodSmear.smear_id}
              linfocitos={bloodSmear.lymphocyte}
              monocitos={bloodSmear.monocytes}
              segmentados={bloodSmear.segmented_neutrophils}
            />
          ))}
      </div>
    </AppContainer>
  );
};

export { WBC };
