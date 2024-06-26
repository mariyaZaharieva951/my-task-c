const Hero = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl lg:text-7xl font-bold font-font-sg text-custom-green">Гъвкави решения за <br/>
             сухопътен транспорт за <br/>
             всеки клиент</h1>
            <div className="flex justify-center items-center my-8 mx-7">
                <img src='/hero-img.png' width={969}
        height={690} className="mx-auto w-full lg:w-auto" alt='hero img'/>
            </div>
        </div>
    )

}

export default Hero;