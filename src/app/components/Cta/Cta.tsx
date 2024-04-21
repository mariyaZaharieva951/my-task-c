import Form from "./Form";

const Cta = () => {
    return (
        <div className="bg-bg-color font-font-sg w-full p-5">
            <div className="mx-auto w-[36%]">
            <h1 className="text-center text-white text-6xl font-bold pt-12">Готови ли сте да работим заедно?</h1>
             <p className="text-center text-slate-300 text-sm tracking-[.01em] py-6">Оставете вашият телефон и ние ще се свържем с вас, за да отоговорим на всички въпроси</p>
             </div>
             <Form/>
        </div>
    );
  };
  
  export default Cta;