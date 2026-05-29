import Link from 'next/link';

export default async function Page() {
    return (
        <div className="homeDiv">
            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer1">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh">ဆန်ကွဲ (ဇဂွဲ)</h2>
                            </div>
                            <div className="card">
                                <img src="/kyitkalay.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2>တစ်အိတ် = 38000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer2">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh">ဖွဲနု 100%</h2>
                            </div>
                            <div className="card">
                                <img src="/rice_bran.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2> နှစ်တင်းတစ်အိတ် = 30000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer3">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh">ဖွဲဆန်ကွဲ</h2>
                            </div>
                            <div className="card">
                                <img src="/sow.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2>တစ်အိတ် = 20000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer4">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh">ဖွဲလတ်</h2>
                            </div>
                            <div className="card">
                                <img src="/village_pig.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h6>အခမဲ့ လက်ဆောင်ပေးသည်</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer5">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh">ကောက်ညှင်း ဆန်ကွဲ</h2>
                            </div>
                            <div className="card">
                                <img src="/moant2.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2>တစ်ပြည် = 3000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer6">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh"></h2>
                            </div>
                            <div className="card">
                                <img src="/duroc.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer7">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh"></h2>
                            </div>
                            <div className="card">
                                <img src="/Landrace.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home2Div">
                <div className="homeBox">
                    <div className="divContainer8">
                        <div className="container">
                            <div className="title">
                                <h2 className="titleh"></h2>
                            </div>
                            <div className="card">
                                <img src="/yorkshire.jpg" alt="riceImage" className="img" />
                            </div>
                            <div className="base">
                                <h2></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeBase1">
                <button className='linkBtn1'>
                    <Link href="/" className='navLink'>ပင်မစာမျက်နှာ</Link>
                </button>
                <button className='linkBtn1'>
                    <Link href="/about2" className='navLink'>စက်မှတ်တမ်း</Link>
                </button>
                <button className='linkBtn1'>
                    <Link href="/contact" className='navLink'>ဖုန်းနံပါတ်များ</Link>
                </button>
                <button className='linkBtn1'>
                    <Link href="/blog" className='navLink5'>စာပေများ</Link>
                </button>
            </div>

        </div>
    )
}