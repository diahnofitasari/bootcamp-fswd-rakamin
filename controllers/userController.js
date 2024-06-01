import userRepository from '../repositories/userRepository.js';

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userRepository.getAllUsers();
      users.forEach(user => {
        if (user.photo_profile) {
          user.photo_profile = `${req.protocol}://${req.get('host')}/images${user.photo_profile}`;
        }
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to fetch users' });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userRepository.getUserById(req.params.id);
      if (user) {
        if (user.photo_profile) {
          user.photo_profile = `${req.protocol}://${req.get('host')}/images${user.photo_profile}`;
        }
        res.json(user);
      } else {
        res.status(400).json({ error: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to fetch user' });
    }
  }

  async createUser(req, res) {
    try {
      const userData = req.body;
      if (req.file) {
        userData.photo_profile = req.file.filename; // Simpan nama file relatif dari file gambar
      }
      const user = await userRepository.createUser(userData);
      if (user.photo_profile) {
        user.photo_profile = `${req.protocol}://${req.get('host')}/images/${user.photo_profile}`;
      }
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create user' });
    }
  }

  async updateUser(req, res) {
    try {
      const userData = req.body;
      if (req.file) {
        userData.photo_profile = req.file.filename; // Simpan nama file relatif dari file gambar
      }
      const existingUser = await userRepository.getUserById(req.params.id);
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      const updatedUser = {
        ...existingUser.dataValues, // Mengambil data lama
        ...userData // Menggabungkan dengan data baru
      };
      await userRepository.updateUser(req.params.id, updatedUser);
      if (updatedUser.photo_profile) {
        updatedUser.photo_profile = `${req.protocol}://${req.get('host')}/images/${updatedUser.photo_profile}`;
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to update user' });
    }
  }

  async deleteUser(req, res) {
    try {
      await userRepository.deleteUser(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to delete user' });
    }
  }
}

export default new UserController();
