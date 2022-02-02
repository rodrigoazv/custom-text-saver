defmodule FreeBird do
  @moduledoc """
  FreeBird keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """

  def domain_model do
    quote do
      use Ecto.Schema
      import Ecto.Changeset
    end
  end

  def domain_service do
    quote do
    end
  end

  def aplication_service do
    quote do
      alias FreeBird.Repo
    end
  end

  def repository do
    quote do
      alias FreeBird.Repo
      import Ecto.Query, warn: false
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
