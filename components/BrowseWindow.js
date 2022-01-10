import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './Header.module.css';

const BrowseWindow = ({ images }) => {


  return (
    <div className={styles.browseWindow}>
      <ImageList rowHeight={300} gap={30} className={styles.gridList}>

        {images.map((tile) => (

          <ImageListItem
            key={tile.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tile.img_src} alt={tile.title} />
            <ImageListItemBar
              title={
                'Rover: ' + tile.rover.name +
                ', Earth Date: ' + tile.earth_date
              }
              subtitle={
                'Camera: ' + tile.camera.full_name +
                ', Sol Date: ' + tile.sol
              }

              //TODO: Change color on click and dd to local storage
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} >
                  <FavoriteIcon color="secondary"/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}

      </ImageList>
    </div>
  );
};

export default BrowseWindow;