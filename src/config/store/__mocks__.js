import axiosInstance from 'shared/utils/services/apiInstance';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

// UserProfile
mock.onGet('/products').reply(200, [
    {
      id: 1,
      name: 'Towel',
      productId: 'towel',
      description: 'Sunny days and warm weather - you clearly need it after a refreshing jump into the cool sea.',
      price: 10
    },
    {
      id: 2,
      name: 'Enlightening book',
      productId: 'enlightening_book',
      description: 'There’s no rush out there. Take your time for a good read.',
      price: 5.99
    },
    {
      id: 3,
      name: 'Waterproof camera',
      productId: 'waterproof_camera',
      description: 'Below the sea’s surface, a hidden world. Don\'t miss out to bring those memories back home.',
      price: 3.22
    },
    {
      id: 4,
      name: 'Pinwheel',
      productId: 'pinwheel',
      description: 'Wondering what to do when there\'s only a light breeze? Back to your childhood!',
      price: 4.44
    }
  ]
);
