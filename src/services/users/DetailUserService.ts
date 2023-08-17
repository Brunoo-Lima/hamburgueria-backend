import prismaClient from '../../prisma';

interface UserRequest {
  user_id: string;
}
class DetailUserService {
  async execute({ user_id }: UserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        update_at: true,
      },
    });

    return user;
  }
}

export { DetailUserService };
