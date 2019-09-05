/* eslint-disable no-underscore-dangle */
import { fromJS } from 'immutable';

export const getEntries = (response, fallback) => {
  if (typeof response === 'undefined' || response === null) {
    return fallback;
  }
  return response.data.entries;
};

export const getCode = (response, fallback) => {
  if (typeof response === 'undefined' || response === null) {
    return fallback;
  }
  return response.data.code;
};

export const getData = (response, fallback) => {
  if (typeof response === 'undefined' || response === null) {
    return fallback;
  }
  return response.data;
};

export function mapRelationShipsToState(response) {
  const relationships = response.map(relationship => {
    return {
      id: relationship._id,
      imageUrl: relationship.image_url,
      country: relationship.contry,
      gender: relationship.gender,
      firstName: relationship.first_name,
      lastName: relationship.last_name,
    };
  });

  return fromJS(relationships);
}
