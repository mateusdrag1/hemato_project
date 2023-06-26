import AppContainer from '@/components/Layout/AppContainer';
import { ResultWBC } from '@/components/ResultWBC';
import { SmearForm } from '@/components/SmearForm';
import { CreateSmearFormData } from '@/components/SmearForm/validate';

export interface BloodSmear extends CreateSmearFormData {
  createdAt: string;
}

import { FC, useState } from 'react';

const WBC: FC = () => {
  const [bloodSmear, setBloodSmear] = useState<BloodSmear[]>(
    localStorage.getItem('bloodSmear')
      ? JSON.parse(localStorage.getItem('bloodSmear') as string)
      : [],
  );

  const removeSmear = (blade: string) => {
    const newBloodSmear = bloodSmear.filter((smear) => smear.blade !== blade);

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
              key={`${bloodSmear.createdAt}${bloodSmear.blade}`}
              bastonetes={bloodSmear.rod}
              data={bloodSmear.createdAt}
              eosinofilos={bloodSmear.eosinophils}
              laminaID={bloodSmear.blade}
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
