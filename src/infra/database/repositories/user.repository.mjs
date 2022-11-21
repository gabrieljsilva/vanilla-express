export class UserRepository {
  #connection;

  constructor(connection) {
    this.#connection = connection;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users`;
      this.#connection.all(query, [], (err, rows) => {
        err ? reject(err) : resolve(rows);
      });
    });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = ?`;
      this.#connection.all(query, [email], (err, rows) => {
        if (err) {
          return reject(err);
        }
        const user = rows[0];
        resolve(user);
      });
    });
  }
}
