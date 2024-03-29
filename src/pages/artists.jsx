import PageWithMenu from '../components/PageWithMenu';
import Grid from '@mui/material/Grid';
import { withMaxWidth } from '../hooks';
import ArtistCard from '../components/ArtistCard';

import akinov from '../public/images/akinov.jpg';
import afanasiev from '../public/images/afanasiev.jpeg';
import skind from '../public/images/skind.jpeg';
import electrostatic from '../public/images/electrostatic.jpeg';
import progruss from '../public/images/progruss.jpeg';
import plumbdump from '../public/images/plumbdump.jpeg';
import blooddrain from '../public/images/blooddrain.jpg';


const Products = () => {
  const maxWidth = withMaxWidth();
  return (
    <PageWithMenu maxWidth={maxWidth} >
      <Grid container spacing={2}>
        {itemData.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={4} lg={3}>
            <ArtistCard title={item.title} img={item.img} />
          </Grid>
        ))}
      </Grid>
    </PageWithMenu>
  );
}

const itemData = [
  {
    img: akinov.src,
    title: 'AKINOV',
  },
  {
    img: electrostatic.src,
    title: 'Electrostatic',
  },
  {
    img: skind.src,
    title: 'SKind',
  },
  {
    img: progruss.src,
    title: 'Progruss',
  },
  {
    img: afanasiev.src,
    title: 'DJAFF',
  },
  {
    img: plumbdump.src,
    title: 'Plumb Dump',
  },
  {
    img: blooddrain.src,
    title: 'BLØØDDRAIN',
  }
];

export default Products;

