// app/page.tsx
import GrowCard from '@/components/cards/grow/GrowCard';
import styles from '@/app/grows/styles.module.css';

const cards = [
  { title: 'Card 1', description: 'Description for card 1 asdfasd  fasf asf asdf asdfasdf asdf dsafasdf ', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s' },
  { title: 'Card 2', description: 'Description for card 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 3', description: 'Description for card 3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 4', description: 'Description for card 4', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 5', description: 'Description for card 5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 6', description: 'Description for card 6', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 7', description: 'Description for card 7', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 8', description: 'Description for card 8', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 9', description: 'Description for card 9', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
  { title: 'Card 10', description: 'Description for card 10', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'  },
];

export default function HomePage() {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div className={styles.grid__item} key={index}>
          <GrowCard
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
