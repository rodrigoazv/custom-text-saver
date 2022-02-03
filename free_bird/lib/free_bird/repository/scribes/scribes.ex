defmodule FreeBird.ScribesRepo do
  alias FreeBird.{Scribes, Repo}

  def publish_scribe(scribe) do
    Repo.insert!(Scribes.changeset(scribe))
  end
end
