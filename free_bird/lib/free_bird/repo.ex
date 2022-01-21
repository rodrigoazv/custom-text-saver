defmodule FreeBird.Repo do
  use Ecto.Repo,
    otp_app: :free_bird,
    adapter: Ecto.Adapters.Postgres
end
