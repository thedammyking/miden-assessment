import Image from 'next/image';
import smsNotification from '@/assets/svgs/sms-notification.svg';
import { useSignUpStepStore } from '@/providers/sign-up-step-provider';
import { AdminInfoRequestData, SignUpSteps } from '@/types/auth';
import { obfuscateEmailPartialy } from '@/lib/utils';

export default function SignUpSuccess() {
  const { data } = useSignUpStepStore(state => state);
  const admin = data.get(SignUpSteps.AdminInfo) as AdminInfoRequestData;
  return (
    <div className='flex items-center h-screen w-full overflow-y-scroll'>
      <div className='px-[176px] w-full text-center'>
        <Image
          className='mx-auto mb-6'
          src={smsNotification}
          alt='Sms notification'
          width={56}
          height={56}
        />
        <h1 className='font-sans font-medium text-[25px] leading-normal mb-2'>Check Your Email</h1>
        <p className='font-sans text-sm text-[#274B6B] mb-12'>
          We have sent a verification link to{' '}
          <span className='font-medium text-[#01C295]'>{obfuscateEmailPartialy(admin.email)}</span>{' '}
          to confirm the validity your address
        </p>
        <p className='font-sans text-sm text-[#274B6B] mb-12'>
          Didn’t get a mail?{' '}
          <button onClick={() => {}} className='font-medium text-[#01C295]'>
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
