import axios from 'axios';

const getUserLocation = async () => {
  try {
    const response = await axios.get('https://ipinfo.io');
    return response.data;
  } catch (error) {
    console.error('Error fetching user location:', error);
    return null;
  }
};

export default getUserLocation;