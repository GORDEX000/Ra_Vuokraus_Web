import React from 'react';

const Mail = () => {
  return (
    <div id='mail' className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Ota yhteytta</h1>
      <form action="https://getform.io/f/jawxnrjb" method='POST' encType='multipart/form-data'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='uppercase text-sm py-2'>Nimi</label>
            <input id="name" className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="sukunimi" className='uppercase text-sm py-2'>Sukunimi</label>
            <input id="sukunimi" className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Sukunimi' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="puhelin" className='uppercase text-sm py-2'>Puhelin Numero</label>
            <input id="puhelin" className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Numero' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='uppercase text-sm py-2'>Sähköposti</label>
            <input id="email" className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='Sähköposti' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label htmlFor="aihe" className='uppercase text-sm py-2'>Aihe</label>
          <input id="aihe" className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='Aihe' />
        </div>
        <div className='flex flex-col py-2'>
          <label htmlFor="viesti" className='uppercase text-sm py-2'>Viesti</label>
          <textarea id="viesti" className='border-2 rounded-lg p-3 border-gray-300' rows={10} name='Viesti'></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Lähetä</button>
      </form>
    </div>
  );
};

export default Mail;
