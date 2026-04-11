import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import fotoImg from '../../../../public/foto1.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CardClinic() {
  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <div className='relative h-48'>
          <div>
            <Image
              src={fotoImg}
              alt='Foto da clínica'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='p-4 space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-semibold'>Clínica centro</h3>
              <p className='text-sm text-gray-500'>
                Rua x, centro, Campo Grande - MS
              </p>
            </div>
            <div className='w-2.5 h-2.5 rounded-full bg-emerald-500'></div>
          </div>
          <Link
            href='/clinica/123'
            className='w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium'
          >
            Agendar horário
            <ArrowRight className='ml-2' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
