import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

type MediasSocias = {
  name: string;
  to: string;
  id: number;
  icon: React.ReactNode;
};
type CostumerInformationProps = {
  contactInformation: {
    telephone: string;
    address: string;
    email: string;
  };
  mediaSocias: MediasSocias[];
};
const costumerInformation: CostumerInformationProps = {
  contactInformation: {
    telephone: '55 0000 0000',
    address: '',
    email: '',
  },
  mediaSocias: [
    {
      name: 'instagram',
      to: '/',
      id: 3,
      icon: <AiFillInstagram />,
    },
    {
      name: 'whatsapp',
      to: '/',
      id: 2,
      icon: <RiWhatsappFill />,
    },
  ],
};
export default costumerInformation;
