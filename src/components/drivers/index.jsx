import Image from 'next/image'
import { Container } from '@/components/Container'
import Link from 'next/link'

const drivers = [
  {
    name: 'Jensen Marold',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1678004241/Dr%20Kart/drivers/Screenshot_2023-03-05_at_3.15.42_pm_qkc3gn.png',
    bio: 'Jensen Marold, a talented and accomplished go-kart racer, currently holds the prestigious title of Australian Champion in the MiniMax class. Since joining the highly-regarded DR Racing Kart team, Jensen has achieved remarkable success, with two state championships and one national championship under his belt. In an exciting new development, Jensen has recently transitioned to the Junior division, where he is poised to make a significant impact in the Elite Junior KA2 category. As a rising star in the world of go-kart racing, Jensen is a formidable competitor and an integral part of the team.',
  },
  {
    name: 'Jordan Bantick',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681717781/Dr%20Kart/drivers/323917860_535872531843537_3109221632803070477_n_dk1cv0.jpg',
    bio: 'Jordan Bantick, a promising young talent in the world of go-kart racing, recently secured an impressive 3rd place finish in the 2022 Golden Power Series. As he enters his final year competing in the highly competitive Cadet 9 class, Jordan is eager to make his mark. In 2023, he is set to participate in the prestigious Australian Kart Championship, as well as the GPS and various other championships throughout Victoria. With a strong determination to excel, Jordan is a valuable member of the team and one to watch in the world of go-kart racing.',
  },
  {
    name: 'Cody Boys',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1678004236/Dr%20Kart/drivers/Cody_b4leyh.png',
    bio: 'Cody Boys, a rising talent in the karting world, has been making exceptional strides since joining the sport. Demonstrating rapid progress, Cody has already achieved notable wins and podium finishes. In 2023, he is set to further showcase his skills by participating in selected rounds of the Australian Kart Championship (AKC), the Golden Power Series (GPS), and other prestigious championships. With a bright future ahead, Cody Boys is a promising driver to keep an eye on as he continues to develop and excel in karting.',
  },
  {
    name: 'Ayden Williams',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681718001/Dr%20Kart/drivers/340188595_777097967156906_6039955764248516962_n_eov3uj.jpg',
    bio: "Ayden Williams, a skilled and ambitious driver, joined the esteemed DR Racing Kart team in 2023. Currently dominating the New South Wales (NSW) SSS Championship, Ayden has also recently clinched the ACT State Championship title. The powerful alliance of Ayden's racing prowess, Warped Racing Engines, and the DR Racing Kart team create a formidable force for the upcoming season. With such a strong combination, Ayden Williams is poised for continued success and an impressive year ahead in the karting world.",
  },
  {
    name: 'George Prodford Nalder',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681717576/Dr%20Kart/drivers/332903451_525739846366756_111813554534665863_n_zwhkgm.jpg',
    bio: 'George Prodford Nalder, a dedicated and accomplished driver, has been an integral part of the team for the past three years. With an impressive record that includes securing the 2022 SSS Championship, consistently placing in the top 5 at state titles, and earning countless wins and podium finishes, George has proven his racing prowess time and time again. As a talented young gun in the karting world, the 2023 season is shaping up to be another strong year for George, as he continues to push the limits and pursue excellence on the track.',
  },
  {
    name: 'Brock Crossingham',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681717632/Dr%20Kart/drivers/331552343_718300289760218_2231991992592232168_n_ntp7cx.jpg',
    bio: "Brock Crossingham, a determined and rapidly improving driver, is already making waves in the karting world despite being in just his second year of competition. Tackling the elite class of Senior Performance, Brock's strong results, significant progress, and unwavering 'never give up' attitude set the stage for an impressive 2023 season. As Brock continues to develop his skills and build on his achievements, his tenacity and commitment to the sport will undoubtedly serve him well in the years to come.",
  },
  {
    name: 'Lazarus Añonuevo',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681717713/Dr%20Kart/drivers/329009017_242756618357401_5232664015151343984_n_fofqfq.jpg',
    bio: "Lazarus Añonuevo, the youngest driver in the DR Racing Kart stable, is already making a name for himself on the karting scene. With a remarkable 2nd place finish at the ACT titles and currently leading the Canberra Kart Club Championship, Lazarus is a rising star with big dreams. In the coming months, he is set to compete in the final three rounds of the Australian Kart Championship, the Rotax Australian Championship, and will make his international racing debut in November this year. Keep an eye on this exciting young talent – there's no doubt that Lazarus Añonuevo is one to watch!",
  },
  {
    name: 'Imogen Radburn',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681717860/Dr%20Kart/drivers/242290323_4340169112737170_4428866427536436795_n_oacw3w.jpg',
    bio: "Imogen Radburn, a seasoned and versatile driver from the Radburn Racing Team, has been a valuable member of the DR Racing Kart team for over three years. Boasting a state championship, numerous wins, pole positions, and podium finishes across various classes, Imogen's passion and dedication to the sport are undeniable. As she expands her racing endeavors, she is currently competing in Formula Ford and selected rounds of the Aussie Racing Car Championship. With her impressive track record and unwavering commitment, 2023 is shaping up to be a monumental year for Imogen Radburn.",
  },
  {
    name: 'Addison Radburn',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1681717923/Dr%20Kart/drivers/312047591_1344478093012328_3250284496587359071_n_qo1w0w.jpg',
    bio: "Addison Radburn, the younger driver from the Radburn Racing Team, has been an integral part of our team for over three years. Her outstanding results have not only impressed us at the DR Racing Kart team, but also caught the attention of her competitors. Addison has achieved numerous wins and podium finishes, including standout performances in the SSS Championship. As she continues to excel on the track, Addison's racing career shows great promise, with 2023 shaping up to be another successful year for this talented driver.",
  },
]

export default function Team() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto mb-20 lg:mx-0">
          <p className="text-base font-semibold leading-7 text-main-600">
            The Skilled Athletes Behind the Wheel
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Drivers
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our drivers are skilled athletes who have honed their craft over
            years of practice, training, and dedication to the sport of karting.
            They are the ones who bring our karts to life on the track, pushing
            them to the limit and striving for victory in every race.
          </p>
        </div>
      </Container>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-2">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {drivers.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                height={260}
                width={390}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Container className="mt-10 flex justify-between ">
          <p className="text-base font-semibold leading-7 text-main-600">
            Please send your information to the Dr kart team if you would like
            your profile added to the list.
          </p>
          <Link
            href="mailto:drkartaust@outlook.com"
            target={'_blank'}
            className="rounded-full bg-main-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-main-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600"
          >
            Contact
          </Link>
        </Container>
      </div>
    </div>
  )
}
