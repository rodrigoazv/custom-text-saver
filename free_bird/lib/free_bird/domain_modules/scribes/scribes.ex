defmodule FreeBird.Scribes do
  use FreeBird, :domain_model

  @required_params [:blocks, :version, :hower]
  schema "scribes" do
    field(:blocks, :string)
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
