
import {FC} from 'react'
import Image from 'next/image'
import styles from './GrowCard.module.css'
import { MdArrowForwardIos } from "react-icons/md";

interface GrowCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: FC<GrowCardProps> = ({title, description, imageUrl}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__description}>{description}</p>
      </div>
      <div className={styles.card__icon}>
        <MdArrowForwardIos size={25} />
      </div>
    </div>
  )
}

export default Card
