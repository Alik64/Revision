export const YoutubeForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" id="channel" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
