import * as mongoose from 'mongoose';
import { IService } from './interface';

const Scehma: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    transform(_doc, ret) {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
  timestamps: { createdAt: true, updatedAt: false },
});

export const ServiceModel = mongoose.model<IService & mongoose.Document>('IService', Scehma);
