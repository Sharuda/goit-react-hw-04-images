import { useState } from 'react';
import { ListItem, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

const ImageGalleryItem = ({ item }) => {
  const [shownModal, setShownModal] = useState(false);

 const onModal = () => {
     setShownModal(prevState => !prevState);
  };

  const { webformatURL } = item;
  
    return (
      <ListItem>
        <Picture onClick={onModal} src={webformatURL} alt="img" />
        {shownModal && <Modal onClose={onModal} image={item} />}
      </ListItem>
    );
  }


ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
