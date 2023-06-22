import React from 'react';
import { BiHomeCircle, BiBookmark, BiCog } from 'react-icons/bi';
import { FaSlackHash } from 'react-icons/fa';
import { MdOutlineNotificationsActive as Notification } from 'react-icons/md';
import Image from 'next/image';

export default function Menu() {
  return (
    <div className='menuC '>
      <section className='text-xl'>
        <h1 className='text-2xl'>Logo</h1>
      </section>
      <nav className='menu menu-vertical '>
        <li className='text-xl px-6'>
          <a href='/'>
            <BiHomeCircle /> Inicio
          </a>
          <a href='/'>
            <FaSlackHash /> Explorar
          </a>
          <a href='/'>
            <Notification /> Notificaciones
          </a>
          <a href='/'>
            <BiBookmark /> Guardados
          </a>
          <a href='/'>
            <BiCog className='text-white' /> Configuracion
          </a>
        </li>
      </nav>
      <section className=' flex'>
        <label tabIndex={0} className='btn btn-ghost btn-circle btn-big avatar'>
          <div className='w-full rounded-full'>
            {/* <Image src='https://i.pinimg.com/564x/60/f3/0f/60f30f4ed266053d119e4e844be0ec6f.jpg' /> */}
            <Image
              src='https://i.pinimg.com/564x/60/f3/0f/60f30f4ed266053d119e4e844be0ec6f.jpg'
              alt='profile'
              width={1000}
              height={500}
            />
          </div>
        </label>
      </section>
    </div>
  );
}
