import authBanner from '@/assets/svgs/auth-banner.svg';
import linpayLogo from '@/assets/svgs/linpay-logo.svg';
import Image from 'next/image';

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-full grid grid-cols-2 h-screen max-w-[1440px] max-h-[1024px]'>
      <section className='w-full h-full overflow-y-scroll'>{children}</section>
      <aside className='rounded-bl-[100px] relative overflow-hidden w-full h-full flex justify-center items-center'>
        <div className='absolute top-0 left-0 right-0 bottom-0'>
          <Image
            src={authBanner}
            alt='Auth banner overlay'
            priority
            style={{ objectFit: 'cover', width: '100%', height: '100vh' }}
          />
        </div>
        <div className='relative'>
          <Image src={linpayLogo} alt='linpay' height={80} />
        </div>
      </aside>
    </main>
  );
}
