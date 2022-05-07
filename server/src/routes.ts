import { Router } from 'express';
import { NodeMailerAdapter } from './adapters/nodemailer/NodeMailerAdapter';

import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository';
import { SubmitFeedbackUseCase } from './useCases/SubmitFeedbackUseCase';

export const routes = Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodeMailerAdapter = new NodeMailerAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodeMailerAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  return res.status(201).send();
});
