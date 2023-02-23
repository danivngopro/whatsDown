import * as Joi from 'joi';

const serviceCreateSchema = Joi.object({
  name: Joi.string().required(),
  status: Joi.boolean().required(),
});

const serviceUpdateSchema = Joi.object({
  name: Joi.string(),
  status: Joi.boolean(),
});

const serviceIdSchema = Joi.object({
  id: Joi.string().length(24).required(),
});

export const createSchema = Joi.object({
  body: serviceCreateSchema,
  query: {},
  params: {},
});

export const updateSchema = Joi.object({
  body: serviceUpdateSchema,
  query: {},
  params: serviceIdSchema,
});

export const idSchema = Joi.object({
  body: {},
  query: {},
  params: serviceIdSchema,
});

export const getAllSchema = Joi.object({
  body: {},
  query: {},
  params: {},
});



