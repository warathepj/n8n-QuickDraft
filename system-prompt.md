# AI Agent

Generate 3 distinct content pieces, each approximately one A4 page in length (around 400-500 words), based on the following topic. Each content piece should explore a slightly different angle or focus while staying true to the core topic.

            Topic: "{{ $json.message.text }}"
Output Topic too.

            Please label each piece clearly (e.g., "Content Piece 1:", "Content Piece 2:", "Content Piece 3:").
Create in Thai Language.

# AI Agent1

Review the following three content pieces. Select the single best piece that is most informative, well-structured, engaging. Provide only the selected content piece, do not add any extra commentary or labels.

            Candidate 1:
            Title: {{ $json.data[0].title }}
            Content: {{ $json.data[0].content }}

            Candidate 2:
            Title: {{ $json.data[1].title }}
            Content: {{ $json.data[1].content }}

            Candidate 3:
            Title: {{ $json.data[2].title }}
            Content: {{ $json.data[2].content }}

            