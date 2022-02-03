defmodule FreeBird.Repo.Migrations.Scribes do
  use Ecto.Migration

  def change do
    create table("scribes") do
      add :blocks, :string
      add :version, :string, size: 10
      add :hower, :string

      timestamps()
    end
  end
end
