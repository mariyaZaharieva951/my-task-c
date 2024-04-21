const Form = () => {
    return (
             <form className="mx-auto max-w-9xl mb-5">
                <div className="relative flex justify-center pb-10">
                    <div className="bg-no-repeat bg-left">
                    <input className="w-[13rem] rounded-l py-4 text-xs pl-8" placeholder="Мобилен телефон"></input>
                    <svg className="absolute top-5 transform -translate-y-1.5 h-6 w-4 pl-1.5 pb-1 ml-1 fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" d="M10 12.221l8.343-6.628c.195-.154.39-.067.39.195V16.5c0 .216-.174.5-.5.5H1.5c-.276 0-.5-.218-.5-.5v-10c0-.262.214-.35.39-.195L10 12.221zm9.447-7.738A1.5 1.5 0 0 0 18.52 4H1.48a1.5 1.5 0 0 0-1.373 2.067l8.447 8A1.5 1.5 0 0 0 10 14a1.5 1.5 0 0 0 1.373-2.067l8.447-8zM1.28 5.309L10 12.779l8.72-6.47a.5.5 0 0 0-.561-.776L10 11.779l-7.159-5.24a.5.5 0 0 0-.56.77z"></path>
  </svg></div>
                    <button className=" w-[7rem] bg-in-color text-xs text-custom-green rounded-r font-bold py-2">Изпрати</button>
                </div>
             </form>
    );
  };
  
  export default Form;