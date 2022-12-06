import React from 'react';
import './Filters.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SaveIcon from '@mui/icons-material/Save';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
  return `$${value}`;
}
const Filters = ({ value, setValue }) => {
  const [orderNumberChange, setOrderNumberChange] = React.useState([15, 55]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOrderNumberChange = (newValue) => {
    console.log(newValue);
  };
  return (
    <div className='filters-section'>
      <div className='filters-header'>
        <p className='filters-title'>Item performance</p>
      </div>
      <div className='save-search'>
        <p>
          <SaveIcon /> <span>Save this search</span>
        </p>
        <p>
          <span>See all saved searches</span>
          <ChevronRightIcon />
        </p>
      </div>
      <div className='error-rate'>
        <p className='error-rate-title'>Error Rate</p>
        <div className='error-rate-items'>
          <p>Under 0.5%</p>
          <p>0.5% to 1%</p>
          <p>1% to 1.5%</p>
          <p>1.5% to 2.0%</p>
          <p>2.0% to 2.5%</p>
          <p>Above 2.5%</p>
        </div>
      </div>
      <div className='order-value-slider'>
        <p>Order Value</p>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Order value range'}
            value={value}
            min={2}
            max={30}
            onChange={handleChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
      <div className='order-value-slider'>
        <p>Number of orders</p>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Order value range'}
            value={orderNumberChange}
            min={1}
            max={100}
            onChange={handleOrderNumberChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
      <div className='order-value-slider'>
        <p>Price Range</p>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Order value range'}
            value={orderNumberChange}
            min={1}
            max={100}
            onChange={handleOrderNumberChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
      <div className='rating-container'>
        <p>Rating</p>
        <div>
          <Checkbox {...label} />
          <Stack>
            <Rating name='half-rating' defaultValue={1} precision={1} />
          </Stack>
        </div>
        <div>
          <Checkbox {...label} />
          <Stack>
            <Rating name='rating' defaultValue={2} precision={1} />
          </Stack>
        </div>
        <div>
          <Checkbox {...label} />
          <Stack>
            <Rating name='rating' defaultValue={3} precision={1} />
          </Stack>
        </div>
        <div>
          <Checkbox {...label} />
          <Stack>
            <Rating name='rating' defaultValue={4} precision={1} />
          </Stack>
        </div>
        <div>
          <Checkbox {...label} />
          <Stack>
            <Rating name='rating' defaultValue={5} precision={1} />
          </Stack>
        </div>
      </div>
      <div className='time-details'>
        <p>Preparation Time</p>
        <div>
          <p>Under 5 min</p>
          <p>5 to 10 min</p>
          <p>10 to 20 min</p>
          <p>Above 20 min</p>
        </div>
      </div>
      <div className='time-details'>
        <p>Wait Time</p>
        <div>
          <p>Under 5 min</p>
          <p>5 to 10 min</p>
          <p>10 to 20 min</p>
          <p>Above 20 min</p>
        </div>
      </div>
      <div className='time-details'>
        <p>Hand off Time</p>
        <div>
          <p>Under 5 min</p>
          <p>5 to 10 min</p>
          <p>10 to 20 min</p>
          <p>Above 20 min</p>
        </div>
      </div>
      <div className='order-value-slider'>
        <p>Basket size</p>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Order value range'}
            value={orderNumberChange}
            min={1}
            max={100}
            onChange={handleOrderNumberChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </div>
  );
};

export default Filters;
