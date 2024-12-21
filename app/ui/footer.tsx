import Link from 'next/link';
import Image from 'next/image';
export default function Footer(){
    return (
        <footer className="p-4 flex flex-row justify-center items-center">
            <Link href="https://github.com/Guniism/guniism-homepage">
                <Image 
                    src="/github-mark-white.svg" 
                    alt="GitHub" 
                    className='h-6 w-auto'
                    width={100}
                    height={100}
                    />
            </Link>
            <p className='text-whte text-sm'>&nbsp; Made by&nbsp;
                <Link href="https://github.com/Guniism" className="text-green hover:text-lgreen font-bold">
                    Guniism
                </Link>
            </p>&nbsp;
        

        </footer>
    );
}
