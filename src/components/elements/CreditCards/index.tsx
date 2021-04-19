import Image from "next/image";
import * as S from "./styles";
const CreditCard = () => {
  return (
    <S.Container>
      <Image
        src="/images/credit-cards-accepted.png"
        width="280px"
        height="80px"
        objectFit="contain"
      />
    </S.Container>
  );
};

export default CreditCard;
