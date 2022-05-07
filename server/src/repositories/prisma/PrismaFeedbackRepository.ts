import { prisma } from "../../database/prisma";

import { FeedbackRepository, FeedbackCreateData } from "../FeedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository {
  public async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }
}