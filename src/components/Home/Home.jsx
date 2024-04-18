import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <section className='section_one'>
                <img className='section_one_img_1' src="https://www.mebels.kg/media/wysiwyg/BRW/Solerno/870x387.jpg" alt="" />
                <h1 className='section_one_h1_1'>Мебель в Бишкеке - официальный интернет-магазин с бесплатной доставкой</h1>
                <h3>Экономим - вместе с Вами! Наши цены – ниже розничных!</h3>
                <p>Интернет-магазин мебели в Бишкеке Мebels.kg предлагает широкий ассортимент удобной и функциональной мебели от ведущих производителей по таким низким ценам, чтобы как можно больше людей могли их купить.
                    Продавая мебель напрямую со склада, мы избегаем оплаты аренды зала и зарплаты персонала, что позволяет постоянно снижать цены, а Вам - экономить время и деньги!</p>
                <h3>Как купить мебель в Бишкеке?</h3>
                <p>Проще, дешевле и удобнее, чем в обычном магазине <a href="">Подробнее</a></p>
                <h3>Хотите купить мебель в другом городе Кыргызстана?</h3>
                <p>Закажите доставку прямо до своего подъезда! За годы работы мы накопили большой опыт доставки, доставим за 5-7 дней.</p>
                <h3>Режим работы:</h3>
                <p>С понедельника по пятницу с 9:00 до 19:00. В субботу, воскресенье с 10:00 до 18:00.</p>
                <h1>Популярные Спальни в Бишкеке:</h1>
                <div className="polca_img">
                <img className='section_one_img1' src="https://www.mebels.kg/media/catalog/product/cache/8/small_image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/o/boderum_ser_10.jpg" alt="" />
                <img className='section_one_img1' src="https://www.mebels.kg/media/catalog/product/cache/8/small_image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/n/antalia_3d_sonoma.jpg" alt="" />
                <img className='section_one_img1' src="https://www.mebels.kg/media/catalog/product/cache/8/small_image/500x500/9df78eab33525d08d6e5fb8d27136e95/e/l/elis_zol_2.jpg" alt="" />
                <img className='section_one_img1' src="https://www.mebels.kg/media/catalog/product/cache/8/small_image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/i/bianchini_15.jpg" alt="" />
                </div>
                
            </section>
        </div>
    )
}

export default Home
