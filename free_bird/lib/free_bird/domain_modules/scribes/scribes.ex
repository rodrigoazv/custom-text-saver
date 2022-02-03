defmodule FreeBird.Scribes do
  use FreeBird, :domain_model

  @required_params [:blocks, :version, :hower]
  schema "users" do
    field(:blocks, {:array, :string})
    field(:version, :string)
    field(:hower, :string)

    timestamps()
  end

  def changeset(struct \\ %__MODULE__{}, params) do
    struct
    |> cast(params, @required_params)
    |> validate_required(@required_params)
  end
end
