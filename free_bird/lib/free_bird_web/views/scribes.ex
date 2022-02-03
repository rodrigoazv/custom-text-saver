defmodule FreeBird.ScribesView do
  use FreeBird, :view

  alias FreeBird.Scribes

  def render("create.json", :ok) do
    %{blocks: "ok"}
  end
end
