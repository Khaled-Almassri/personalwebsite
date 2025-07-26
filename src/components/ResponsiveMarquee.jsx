import Az104 from '../assets/az104.png';
import AWSSAA from '../assets/awssaa.png';
import compTia from '../assets/comptia.png';
const certs = [
  {
    title: 'CompTia Network+',
    image: compTia,
  },
  {
    title: 'AWS Solutions Architect - Associate (SAA)',
    image: AWSSAA,
  },
  {
    title: 'Microsoft Azure Administrator Associate (AZ-104)',
    image: Az104,
  },
];

const ResponsiveMarquee = () => {
  // Double the list for continuous scroll illusion
  const repeatedCards = [...certs, ...certs];

  return (
    <div className="relative overflow-hidden w-full py-6">
      <div className="marquee flex space-x-4 px-4">
        {repeatedCards.map((certs, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 sm:w-52 md:w-60 lg:w-72 h-80 rounded-xl flex flex-col items-center justify-center text-center text-c4 font-semibold overflow-hidden"
          >
            <img
              src={certs.image}
              alt={certs.title}
              className="w-full h-50 object-contain rounded-t-xl"
            />
            <div className="p-2">{certs.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveMarquee;
