const Cta = () => {
    return (
        <div className="bg-bg-color font-font-sg">
            <div className="mx-auto w-[30%]">
            <h1 className="text-center text-white text-5xl font-bold pt-10">Готови ли сте да работим заедно?</h1>
             <p className="text-center text-slate-300 text-sm tracking-[.02em] py-6">Оставете вашият телефон и ние ще се свържем с вас, за да отоговорим на всички въпроси</p>
             <form className="mb-5">
                <div className="relative flex justify-center pb-10">
                    <input className="w-1/3 rounded-l py-2 text-xs pl-5 bg-no-repeat bg-left" placeholder="Мобилен телефон"></input>
                    <svg className="absolute left-11 top-1/4 transform -translate-y-1/2 h-4 w-4 fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 12.221l8.343-6.628c.195-.154.39-.067.39.195V16.5c0 .216-.174.5-.5.5H1.5c-.276 0-.5-.218-.5-.5v-10c0-.262.214-.35.39-.195L10 12.221zm9.447-7.738A1.5 1.5 0 0 0 18.52 4H1.48a1.5 1.5 0 0 0-1.373 2.067l8.447 8A1.5 1.5 0 0 0 10 14a1.5 1.5 0 0 0 1.373-2.067l8.447-8zM1.28 5.309L10 12.779l8.72-6.47a.5.5 0 0 0-.561-.776L10 11.779l-7.159-5.24a.5.5 0 0 0-.56.77z"></path>
  </svg>
                    <button className=" w-1/5 bg-in-color text-xs rounded-r py-2">Изпрати</button>
                </div>
             </form>
             </div>
        </div>
    );
  };
  
  export default Cta;