import Kesiswaan from "@/models/Kesiswaan";

export async function POST(request: Request) {
    try {
        // Parse the request body as JSON
        const body = await request.json();
        console.log("Request body received: ", body);

        const { fullName, nisn, ttl, jenis_kelamin, agama, nomor_hp, email, alamat } = body;

        // Ensure all fields are provided
        if (!nisn || !fullName || !ttl || !jenis_kelamin || !agama || !nomor_hp || !email || !alamat) {
            return new Response(JSON.stringify({ error: "All fields are required" }), {
                status: 400,
            });
        }

        // Convert `nisn` and `nomor_hp` to numbers
        const parsedNisn = Number(nisn);
        const parsedNomorHp = Number(nomor_hp);

        // Validate if `nisn` and `nomor_hp` are valid numbers
        if (isNaN(parsedNisn)) {
            return new Response(JSON.stringify({ error: "NISN must be a valid number" }), {
                status: 400,
            });
        }

        if (isNaN(parsedNomorHp)) {
            return new Response(JSON.stringify({ error: "Nomor HP must be a valid number" }), {
                status: 400,
            });
        }

        // Check if NISN already exists
        const ceknisn = await Kesiswaan.findOne({
            where: { nisn: parsedNisn },
        });
        if (ceknisn) {
            return new Response(JSON.stringify({ error: "NISN already exists" }), {
                status: 400,
            });
        }

        // Check if email already exists
        const cekemail = await Kesiswaan.findOne({
            where: { email },
        });
        if (cekemail) {
            return new Response(JSON.stringify({ error: "Email already exists" }), {
                status: 400,
            });
        }

        // Create new student entry
        const newSiswa = await Kesiswaan.create({
            fullName,
            nisn: parsedNisn,
            ttl,
            jenis_kelamin,
            agama,
            nomor_hp: parsedNomorHp,
            email,
            alamat,
        });

        return new Response(JSON.stringify(newSiswa), {
            status: 200,
            statusText: "Berhasil membuat data siswa",
        });

    } catch (error: unknown) {
        console.error("Error occurred: ", error);  // Log the full error for debugging
        if (error instanceof Error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
            });
        }
        return new Response(JSON.stringify({ error: "An unknown error occurred" }), {
            status: 500,
        });
    }
}
