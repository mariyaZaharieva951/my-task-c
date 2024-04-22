const Services = () => {
    return (
        <div className="font-font-sg mx-16 px-7 my-10 py-12">
            <div>
                <h2 className="text-4xl font-bold pb-8">Други услуги</h2>
            </div>
            <div className="lg:flex gap-7 w-full sm:flex-row">
                <div className="lg:w-[30%] sm:w-full sm:mb-7">
                    <div>
                        <img className="w-[100%]" src="/img1.png"/>
                    </div>
                    <div>
                        <p className="font-fornt-sg font-bold px-2 pt-4">Опасни товари (ADR)</p>
                    </div>
                </div>
                <div className="lg:w-[30%] sm:w-full sm:mb-7">
                    <div>
                        <img className="w-[100%]" src="/img2.png"/>
                    </div>
                    <div>
                        <p className="font-fornt-sg font-bold px-2 pt-4">Хладилен транспорт</p>
                    </div>
                </div>
                <div className="lg:w-[30%] sm:w-full sm:mb-7">
                    <div>
                        <img className="w-[100%]" src="/img3.png"/>
                    </div>
                    <div>
                        <p className="font-fornt-sg font-bold px-2 pt-4">Извънгабаритни товари</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Services;