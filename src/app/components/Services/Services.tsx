const Services = () => {
    return (
        <div className="font-font-sg mx-14 px-7 my-10 py-12">
            <div>
                <h2 className="text-4xl font-bold pb-8">Други услуги</h2>
            </div>
            <div className="flex gap-6 w-full">
                <div className="w-[30%]">
                    <div>
                        <img className="w-[100%]" src="/img1.png"/>
                    </div>
                    <div>
                        <p>Опасни товари (ADR)</p>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div>
                        <img className="w-[100%]" src="/img2.png"/>
                    </div>
                    <div>
                        <p>Хладилен транспорт</p>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div>
                        <img className="w-[100%]" src="/img3.png"/>
                    </div>
                    <div>
                        <p>Извънгабаритни товари</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Services;