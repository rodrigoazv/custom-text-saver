defmodule FreeBirdWeb.ScribeController do
  use FreeBirdWeb, :controller

  alias FreeBird.Scribes

  def publish(conn, params) do
    with {:ok, %Scribes{} = scribes} <- FreeBird.ScribesRepo.publish_scribe(params) do
      conn
      |> put_status(:created)
      |> render("create.json", :ok)
    end
  end
end
