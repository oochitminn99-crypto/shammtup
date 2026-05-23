import Link from "next/link"

export default function ContactPage() {

    return (
        <div className="contactDiv">
            <h1 className="titleMemo">
                ဆက်သွယ်ရမည့် ဖုန်းနံပါတ်များမှာ
            </h1><br />
            <h1 className="titleMemo">
                ဦးငြိမ်းအောင် - 09401956872
            </h1>
            <h1 className="titleMemo">
                ဒေါ်အုန်းငြိမ်း - 09256152658
            </h1>
            <h1 className="titleMemo">
                ကိုတင်ကြိုင် - 09401556401
            </h1>
            <h1 className="titleMemo">
                Telegram - ko tin kyaing +95 9779053478
            </h1>
            <h1 className="titleMemo">
                Viber - ကိုတင်ကြိုင် +959779053478
            </h1><br />
            <h1 className="titleMemo underline underline-offset-4">
                တည်နေရာ
            </h1>
            <p className="titleMemo">
                ရှမ်းတပ်ပါနီချောင်းကူးတံတား အရှေ့ဘက်ထိပ် ရှမ်းတပ်ကုန်း ကျေးရွာ
            </p>

            <div className="homeBase1">
                <button className='linkBtn1'>
                    <Link href="/" className='navLink'>ပင်မစာမျက်နှာ</Link>
                </button>
                <button className='linkBtn1'>
                    <Link href="/about1" className='navLink'>ဖွဲဆန်ကွဲဈေး</Link>
                </button>
                <button className='linkBtn1'>
                    <Link href="/about2" className='navLink'>စက်မှတ်တမ်း</Link>
                </button>
                <button className='linkBtn1'>
                    <Link href="/blog" className='navLink5'>စာပေများ</Link>
                </button>
            </div>

        </div>
    )
}