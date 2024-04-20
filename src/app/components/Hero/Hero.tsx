const Hero = () => {
    return (
        <div className="my-10">
            <h1 className="w-auto text-center text-5xl font-bold font-font-sg text-custom-green">Гъвкави решения за <br/>
             сухопътен транспорт за <br/>
             всеки клиент</h1>
            <div className="flex justify-center items-center h-screen">
                <img src='/hero-img.png' width={969}
        height={690} className="mx-auto w-[50%]" alt='hero img'/>
            </div>
        </div>
    )

}

export default Hero;