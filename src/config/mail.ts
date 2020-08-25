interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'vinicius.colodetti@gmail.com',
      name: 'Vinicius Colodetti',
    },
  },
} as IMailConfig;
