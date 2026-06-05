export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await fetch(
            'https://hv-sales-bot-degree-orchestrator.herovired.com/webhooks/lsq/lead/ananda',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.API_KEY
                },
                body: JSON.stringify(req.body)
            }
        );

        const data = await response.json().catch(() => ({}));
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
