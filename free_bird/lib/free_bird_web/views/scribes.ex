defmodule FreeBirdWeb.ScribesView do
  use FreeBirdWeb, :view

  alias FreeBird.Scribes

  def render("create.json", :ok) do
    %{blocks: "ok"}
  end
end
